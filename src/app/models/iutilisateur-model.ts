import {IAdresseModel, IGenreModel} from ".";

export interface IUtilisateurModel {
  id: number;
  username: string;
  email: string;
  tel: string | null;
  image: string | null;
  prenom: string | null;
  nom: string | null;
  role: string;
  statut: string;
  genre: IGenreModel | null;
  adresse: IAdresseModel | null;
  createdAt: Date;
  updatedAt: Date | null;
  lastLogin: Date | null;
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
