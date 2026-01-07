// Event API Service
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5062/Beykent';

export interface EventItem {
  id: string;
  title: string;
  description: string;
  photo: string;
  category: string; // From MainPageContent
  date: string;
  slug: string;
  state: number; // 1 = aktif, 0 = pasif
  location?: string; // Might need to check where location is stored if not in Event entity, assuming description or separate field for now.
  // Note: Event entity in backend didn't clearly show 'Location', but frontend mock had it.
  // Inherits MainPageContent which has Photo, Title, Description, Date.
  createDate?: string;
  updateDate?: string | null;
}

class EventService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
      cache: 'no-store',
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Get all events
  async getAllEvents(): Promise<EventItem[]> {
    return this.request<EventItem[]>('/Events');
  }

  // Get event by ID
  async getEventById(id: string): Promise<EventItem> {
    return this.request<EventItem>(`/Events/${id}`);
  }

  // Get active events
  async getActiveEvents(): Promise<EventItem[]> {
    const allEvents = await this.getAllEvents();
    return allEvents.filter(item => item.state === 1);
  }
}

export const eventService = new EventService();
