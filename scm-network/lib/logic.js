/**
 * Track the trade of an asset from one owner to another
 * @param {es.uah.myscmnetwork.SCMTrade} trade - the trade to be processed
 * @transaction
 */
async function tradeAsset(trade) {
    if (trade.asset.owner.ownerId !== trade.portal.owner.ownerId) {
        trade.asset.owner = trade.portal.owner;
        let assetRegistry = await getAssetRegistry('es.uah.myscmnetwork.SCMAsset');
        await assetRegistry.update(trade.asset);
    } else {
        throw new Error('Asset and portal have the same owner.');
    }
}