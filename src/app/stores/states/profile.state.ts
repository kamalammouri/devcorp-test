import { HttpErrorResponse } from "@angular/common/http";
import { Iprofile } from "src/app/models/profile.model";

export interface ProfileState {
  response: Iprofile | undefined
  isLoading: boolean | undefined;
  error: HttpErrorResponse | undefined;
}
