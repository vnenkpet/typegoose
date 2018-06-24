import * as mongoose from 'mongoose';
import { Typegoose } from '../../typegoose';
import { Decimal128 } from 'bson';
export declare class Car extends Typegoose {
    model: string;
    isSedan?: boolean;
    price: Decimal128;
}
export declare const model: mongoose.Model<import("../../typegoose").InstanceType<Car>> & Car & typeof Car;
