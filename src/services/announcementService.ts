// Announcement API Service
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5062/Beykent';

export interface AnnouncementItem {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  state: number; // 1 = aktif, 0 = pasif
  createDate?: string;
  updateDate?: string | null;
}

class AnnouncementService {
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

  // Get all announcements
  async getAllAnnouncements(): Promise<AnnouncementItem[]> {
    return this.request<AnnouncementItem[]>('/Announcements');
  }

  // Get announcement by ID
  async getAnnouncementById(id: string): Promise<AnnouncementItem> {
    return this.request<AnnouncementItem>(`/Announcements/${id}`);
  }

  // Get active announcements
  async getActiveAnnouncements(): Promise<AnnouncementItem[]> {
    const allAnnouncements = await this.getAllAnnouncements();
    return allAnnouncements.filter(item => item.state === 1);
  }
}

export const announcementService = new AnnouncementService();
