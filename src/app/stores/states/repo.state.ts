import { HttpErrorResponse } from "@angular/common/http";
import { Irepo } from "src/app/models/repo.model";

export interface RepoState {
  response: Irepo[] | undefined
  isLoading: boolean | undefined;
  error: HttpErrorResponse | undefined;
}
