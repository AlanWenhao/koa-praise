import indexModel from '../model/model';
const indexController = {
    index() {
        return async (ctx, next) => {
            ctx.body = await ctx.render('index.html', {
                "title": "点赞页面",
                "num": ''
            });
        }
    },
    update() {
        return async(ctx, next) => {
            const indexM = new indexModel();
            const data = await indexM.updateNum();
            ctx.body = data;
        }
    }
}

export default indexController;