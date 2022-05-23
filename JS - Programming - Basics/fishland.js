function fishland(input) {
    let priceSkumriqkg = Number(input[0]);
    let priceCacakg = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let pricePalamudkg = (priceSkumriqkg + priceSkumriqkg * 0.6) * palamudKg;
    let priceSafrid = (priceCacakg + priceCacakg * 0.8) * safridKg;
    let priceMidi = midiKg * 7.5;

    let totalBill = pricePalamudkg + priceSafrid + priceMidi;
    console.log(totalBill.toFixed(2));
}
fishland(["6.90",
    "4.20",
    "1.5",
    "2.5",
    "1"])