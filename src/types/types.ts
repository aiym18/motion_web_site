export interface Video {
  id: number;
  title: string;
  description: string;
  duration: string;
  locked: boolean;
}

export interface Lesson {
  id: number;
  title: string;
  videos: Video[];
}
