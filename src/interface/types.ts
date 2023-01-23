export interface FiberPlanState {
  fiberPlans?: FiberPlanDTO[];
  selectedFiberPlan?: FiberPlanDTO | undefined | null;
}

//   const xResponse = Convert.toXResponse(json);

export interface FiberPlansResponse {
  data: FiberPlanDTO[];
}

export interface AddonsTypes {
  type: string;
  title: string;
  desc: string;
  price: string;
}

export interface FiberPlanDTO {
  id?: number;
  addedValue?: string[];
  downloadSpeed?: string;
  isBestSeller?: boolean;
  name?: string;
  planType?: string;
  price?: number;
  uploadSpeed?: string;
  description?: string;
  legacyId?: string;
  addons?: AddonsTypes[];
}

// Converts JSON strings to/from your types
export class FiberPlansDTOConvert {
  public static toFiberPlansDTOs(json: string): FiberPlanDTO[] {
    return JSON.parse(json);
  }

  public static toFiberPlansDTOsToJson(value: FiberPlanDTO[]): string {
    return JSON.stringify(value);
  }
}
