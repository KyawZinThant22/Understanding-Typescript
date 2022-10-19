// intersection types mean combiming types

interface Admin {
  name: string;
  privileage: string[];
}

interface Employe {
  name: string;
  startDate: Date;
}

interface CombinedTypes extends Admin, Employe {}

type CombinationofTypes = Admin & Employe;

const brian: CombinedTypes = {
  name: "kyaw",
  privileage: ["server", "accept"],
  startDate: new Date(),
};
