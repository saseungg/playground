{
  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for..in
  };

  // type ReadOnly<T>= {
  //   readonly[P in Keyof T]: T[P];
  // }

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
  };

  /* type VideOptional = {
  title?: string;
  author?: string;
};

type VideoReadOnly = {
  readonly title: string;
  readonly author: string;
};
 */
}
