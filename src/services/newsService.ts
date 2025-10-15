// News API Service
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5062/Beykent';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  photo: string;
  category: string;
  date: string;
  slug: string;
  state: number; // 1 = aktif, 0 = pasif
  isMeslekYuksekokulu: boolean;
  createDate?: string;
  updateDate?: string | null;
}

export interface CreateNewsRequest {
  title: string;
  description: string;
  photo: string;
  category: string;
  date: string;
  slug: string;
  state: number; // 1 = aktif, 0 = pasif
  isMeslekYuksekokulu: boolean;
}

export interface UpdateNewsRequest extends CreateNewsRequest {
  id: string;
}

class NewsService {
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

  // Get all news
  async getAllNews(): Promise<NewsItem[]> {
    return this.request<NewsItem[]>('/News');
  }

  // Get news by ID
  async getNewsById(id: string): Promise<NewsItem> {
    return this.request<NewsItem>(`/News/${id}`);
  }

  // Create new news (Admin only)
  async createNews(news: CreateNewsRequest): Promise<NewsItem> {
    return this.request<NewsItem>('/News', {
      method: 'POST',
      body: JSON.stringify(news),
    });
  }

  // Update news (Admin only)
  async updateNews(id: string, news: UpdateNewsRequest): Promise<NewsItem> {
    return this.request<NewsItem>(`/News/${id}`, {
      method: 'PUT',
      body: JSON.stringify(news),
    });
  }

  // Delete news (Admin only)
  async deleteNews(id: string): Promise<void> {
    return this.request<void>(`/News/${id}`, {
      method: 'DELETE',
    });
  }

  // Get news by category
  async getNewsByCategory(category: string): Promise<NewsItem[]> {
    const allNews = await this.getAllNews();
    return allNews.filter(news => news.category === category);
  }

  // Get news by state
  async getActiveNews(): Promise<NewsItem[]> {
    const allNews = await this.getAllNews();
    return allNews.filter(news => news.state === 1);
  }

  // Search news
  async searchNews(query: string): Promise<NewsItem[]> {
    const allNews = await this.getAllNews();
    const lowercaseQuery = query.toLowerCase();

    return allNews.filter(
      news =>
        news.title.toLowerCase().includes(lowercaseQuery) ||
        news.description.toLowerCase().includes(lowercaseQuery) ||
        news.category.toLowerCase().includes(lowercaseQuery)
    );
  }
}

export const newsService = new NewsService();
