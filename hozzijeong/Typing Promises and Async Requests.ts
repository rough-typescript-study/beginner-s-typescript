interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// 반환되는 type으로 Promise<LukeSkywalker>를 작성해도 좋다. 
// 추가적으로 반환되는 data에 데이터 타입을 직접 적어줘도 좋다 (data:LukeSkywalker)

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch('https://swapi.dev/api/people/1').then((res) => { 
    return res.json();
  });

  return data;
};
