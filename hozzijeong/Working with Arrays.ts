interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user' | 'super-admin';
  posts: Post[]; // or Array<Post> 와 같이 바꾸기도 함. 사실 Array<T> 와 같은 방식이 Array와 관련된 내장 메서드 사용에 유용하기 때문에 이 방법을 권자함. 
}

interface Post {
  id: number;
  title: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: 'Matt',
  lastName: 'Pocock',
  role: 'admin',
  posts: [
    {
      id: 1,
      title: 'How I eat so much cheese',
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};
