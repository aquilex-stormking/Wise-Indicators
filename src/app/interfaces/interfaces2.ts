export interface Kansas {
    "@context": Array<ContextClass | string>;
    type:       string;
    geometry:   Geometry;
    properties: Properties;
}

export interface ContextClass {
    "@version": string;
    wx:         string;
    geo:        string;
    unit:       string;
    "@vocab":   string;
}

export interface Geometry {
    type:        string;
    coordinates: Array<Array<number[]>>;
}

export interface Properties {
    updated:           Date;
    units:             string;
    forecastGenerator: string;
    generatedAt:       Date;
    updateTime:        Date;
    validTimes:        string;
    elevation:         Elevation;
    periods:           Period[];
}

export interface Elevation {
    unitCode: UnitCode;
    value:    number | null;
}

export enum UnitCode {
    WmoUnitDegC = "wmoUnit:degC",
    WmoUnitM = "wmoUnit:m",
    WmoUnitPercent = "wmoUnit:percent",
}

export interface Period {
    number:                     number;
    name:                       string;
    startTime:                  Date;
    endTime:                    Date;
    isDaytime:                  boolean;
    temperature:                number;
    temperatureUnit:            TemperatureUnit;
    temperatureTrend:           null;
    probabilityOfPrecipitation: Elevation;
    dewpoint:                   Elevation;
    relativeHumidity:           Elevation;
    windSpeed:                  WindSpeed;
    windDirection:              string;
    icon:                       string;
    shortForecast:              string;
    detailedForecast:           string;
}

export enum TemperatureUnit {
    F = "F",
}

export enum WindSpeed {
    The5Mph = "5 mph",
    The5To10Mph = "5 to 10 mph",
    The5To15Mph = "5 to 15 mph",
}
