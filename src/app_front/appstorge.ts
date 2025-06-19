
import { StorageService } from "@/lib/common/storage/sessionstrclient";


/**
 * class AppStorageService.KEY_NOT_FOUND
 */
export class AppStorage {

    static KEY_NOT_FOUND: string = "undefined";
    static ID_NOT_FOUND: number = -1;
    static APPLICATION_ID: string = "application_name";

    public static saveApplicationId(id:number): void {
        StorageService.save(AppStorage.APPLICATION_ID,id.toString());
    }
    public static readApplicationId(): number {
        if (StorageService.exist(AppStorage.APPLICATION_ID)) {
            const value:string = StorageService.read(AppStorage.APPLICATION_ID) ?? AppStorage.KEY_NOT_FOUND;
            return Number(value);
        }
        return AppStorage.ID_NOT_FOUND;
    }
} //end class