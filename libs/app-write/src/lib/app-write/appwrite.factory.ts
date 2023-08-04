import { AppWriteService } from "./app-write.service";

export function appWriteConfig(service: AppWriteService) {
  return () => service.init();
}
