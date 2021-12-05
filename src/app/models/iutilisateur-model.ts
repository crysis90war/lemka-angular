import { IAdresseModel, IGenreModel } from ".";

export interface IUtilisateurModel {
  id: number;
  username: string;
  email: string;
  tel?: string | null;
  image?:string|null;
  prenom?:string|null;
  nom?:string|null;
  genre?: IGenreModel|null;
  role:string;
  statut:string;
  lastLogin?:Date;
  createdAt:Date;
  updatedAt?:Date|null;
  adresse:IAdresseModel|null;
}

/*
    public int Id { get; set; }
    public string? Username { get; set; }
    public string? Email { get; set; }
    public string? Tel { get; set; }
    public string? Image { get; set; }
    public string? Prenom { get; set; }
    public string? Nom { get; set; }
    public GenreModel? Genre { get; set; }
    public string? Role { get; set; }
    public string? Statut { get; set; }
    public DateTime? LastLogin { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
*/
