import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type OtpDocument = Otp & Document

@Schema({ timestamps: true })
export class Otp {
    @Prop({ trim: true })
    email: string

    @Prop()
    code: number

    @Prop()
    expireIn: number
}

export const OtpEntity = SchemaFactory.createForClass(Otp)
