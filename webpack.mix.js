let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.webpackConfig({

    resolve:{

        /* Path Shortcuts */
        alias:{

            '~': path.resolve(__dirname, 'resources/assets/js'),
            Routes: path.resolve(__dirname, 'resources/assets/js/routes'),
            Components: path.resolve(__dirname, 'resources/assets/js/components'),
            Views: path.resolve(__dirname, 'resources/assets/js/views')
        }
    }
})


mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
