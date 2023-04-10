var config = {

    map: {
//        "*": {
//            helloworldscript: 'js/hello_world'
//        },
    },
    deps: ["jquery","js/main"],

    shim: {
        hello_world: {
            deps: ["jquery"],
            exports: "hi_world",
            init: function () {
                return {
                    hi_world: hi_world,
                    sup_world: sup_world
                };
            }
        }
    },
    config: {
        mixins: {
        },
    },
};
