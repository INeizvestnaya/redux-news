export interface NewsType {
  id: number;
  by: string;
  time: number;
  title: string;
  url: string;
  kids: number[];
  descendants: number;
  score: number;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  by: string;
  text: string;
  time: number;
  kids: number[];
  nestedComments: Comment[];
}
