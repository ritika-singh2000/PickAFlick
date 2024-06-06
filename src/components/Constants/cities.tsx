import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCity,
  faBuilding,
  faLandmark,
  faArchway,
  faHotel,
  faLandmarkDome,
  faVihara,
} from "@fortawesome/free-solid-svg-icons";

export interface ICities {
  cityName: string;
  cityCode: string;
  cityId: number;
  cityIcon: IconDefinition;
}

export const cities: ICities[] = [
  { cityName: "Bangalore", cityCode: "BLR", cityId: 1, cityIcon: faCity },
  { cityName: "Mumbai", cityCode: "BOM", cityId: 2, cityIcon: faBuilding },
  { cityName: "Delhi", cityCode: "DEL", cityId: 3, cityIcon: faLandmark },
  { cityName: "Kolkata", cityCode: "CCU", cityId: 4, cityIcon: faArchway },
  {
    cityName: "Hyderabad",
    cityCode: "HYD",
    cityId: 5,
    cityIcon: faCity,
  },
  { cityName: "Ahmedabad", cityCode: "AMD", cityId: 6, cityIcon: faVihara },
  { cityName: "Kerala", cityCode: "KRL", cityId: 7, cityIcon: faLandmarkDome },
  { cityName: "Punjab", cityCode: "PJB", cityId: 8, cityIcon: faHotel },
];
