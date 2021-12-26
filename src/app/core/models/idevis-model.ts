export interface IDevisModel {
  id:number;
  reference:string;
  remarque:string|null;
  estAccepte: boolean|null;
  totalTva?:number|null;
  totalHT:number|null;
  totalTTC:number|null;
  createdAt:Date;
  submittedAt:Date|null;
}

/**
 *     public int Id { get; set; }
 *     public string Reference { get; set; }
 *     public string? Remarque { get; set; }
 *     public bool? EstAccepte { get; set; }
 *     public decimal? TotalTva { get; set; }
 *     public decimal? TotalHT { get; set; }
 *     public decimal? TotalTTC { get; set; }
 *     public DateTime CreatedAt { get; set; }
 *     public DateTime? SubmittedAt { get; set; }
 */
