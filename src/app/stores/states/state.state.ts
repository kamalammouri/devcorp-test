import { HttpErrorResponse } from "@angular/common/http";
import { IstateRepo } from "src/app/models/state-repo.model";

export interface StateRepoState {
  response: IstateRepo | undefined
  isLoading: boolean | undefined;
  error: HttpErrorResponse | undefined;
}
