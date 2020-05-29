import stripePackage from "stripe";
import handler from "../libs/handler-lib";
import { evaluateDesignStoreCost } from "../libs/billing-lib";

export const main = handler(async (event, context) => {
    const {storage, source} = JSON.parse(event.body);
    const amount = evaluateDesignStoreCost(storage);
    const description = "Design strorage charges";

    const stripe = stripePackage(process.env.stripeSecretKey);

    await stripe.charges.create({
        source,
        amount,
        description,
        currency:"aud"
    });

    return { status: true};
});