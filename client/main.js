Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/',           {name: 'home'});
Router.route('/about',      {name: 'about'});
Router.route('/press',      {name: 'press'});
Router.route('/lists/:_id', {
    name: 'lists',
    data: function () {
        console.log(this.params);
        return this.params;
    }
});
