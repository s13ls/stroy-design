let gulp = require('gulp')
let sass = require('gulp-sass')
let browserSync = require('browser-sync')

function sassTask(name){
    gulp.task('sass', function(){                                               
        return gulp.src(`pages/${name}/${name}.+(scss|sass)`)                    
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))   
            .pipe(gulp.dest(`pages/${name}`))                          
            .pipe(browserSync.reload({stream: true}))                           
    })

    gulp.task('browser-sync', function() {                                     
        browserSync({                                                          
            server: {                                                           
                baseDir: `pages/${name}`                                  
            },
            notify: false                                                        
        });
    });
} 

function updateTask(name){
    gulp.task('scripts', function() {
        return gulp.src(`pages/scripts/*.js`)
        .pipe(browserSync.reload({ stream: true }))
    });

    gulp.task('code', function() {
        return gulp.src(`pages/${name}/index.html`)
        .pipe(browserSync.reload({ stream: true }))
    });

    gulp.task('watch', function() {
        gulp.watch(`pages/${name}/${name}.+(scss|sass)`, gulp.parallel('sass')); 
        gulp.watch(`pages/${name}/index.html`, gulp.parallel('code'));         
        gulp.watch(`pages/${name}/js/*.js`, gulp.parallel('scripts'));     
    });

    gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
}

sassTask("contacts")
updateTask("contacts")