export type Brand = {
  id: number;
  name: string;
  href: string;
  image:{
    src: string;
    height?: number
    width?: number;
  };
  imageLight: string;
};
