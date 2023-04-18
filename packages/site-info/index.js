const PROJECT = {
    title: 'Site Title',
    subtitle: 'My great monorepo',
  };
  
  export function getSiteInfo() {
    return { title: PROJECT.title, subtitle: PROJECT.subtitle };
  }

  export function addNumber(a, b){
    return a+b;
  }
  export function subNumber(a, b){
    return a-b;
  }
  export function divNumber(a, b){
    return a/b;
  }
  export function mulNumber(a, b){
    return a*b;
  }