export interface userObj {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    cpf: string;
    isAdmin: boolean;
  }

  export interface Games {
    id: string;
    title: string;
    imgUrl: string;
    description: string;
    year: string;
    score: number;
    traillerYtUrl: string;
    GplayYtUrl: string;
    genero: [{
      genero: string;
    }];
  }

  export interface ProfilesProps {
    id: string;
    title: string;
    imgUrl: string;
    user: {
      id: string;
      isAdmin: boolean;
      name: string;
    };
    game: [
      {
        id: string;
        title: string;
        imgUrl: string;
        description: string;
        year: string;
        score: number;
        traillerYtUrl: string;
        GplayYtUrl: string;
        genero: string[];
      }
    ];
  }

  export interface ProfileOnly {
    id: string;
    title: string;
    imgUrl: string;
  }
  