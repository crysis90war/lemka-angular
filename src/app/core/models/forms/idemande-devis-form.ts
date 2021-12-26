export interface IDemandeDevisForm {
  titre: string;
  remarque: string;
  mensurationId: number | null;
  serviceId: number;
  estUrgent: boolean
}

/*
*   public string? Titre { get; set; }
*   public string? Remarque { get; set; }
*   public int? MensurationId { get; set; }
*   public int ServiceId { get; set; }
*   public bool EstUrgent { get; set; }
* */
