'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        watch: {
            lms_sass: {
                files: [
                    'lms/static/sass/{,*/}*.scss',
                    'common/static/sass/{,*/}*.scss'
                ],
                tasks: [
                    'sass:lms',
                    'concat:lms'
                ]
            }
        },

        clean: {
            lms: {
                src: [
                    // Sass-generated files
                    'lms/static/sass/application-extend1-rtl.css',
                    'lms/static/sass/application-extend1.css',
                    'lms/static/sass/application-extend2-rtl.css',
                    'lms/static/sass/application-extend2.css',
                    'lms/static/sass/application.css',

                    // Concat-generated files
                    'lms/static/css/lms-style-vendor.css',
                    'lms/static/css/lms-style-vendor-tinymce-content.css',
                    'lms/static/css/lms-style-vendor-tinymce-skin.css',
                    'lms/static/css/lms-style-app.css',
                    'lms/static/css/lms-style-app-extend2.css',
                    'lms/static/css/lms-style-app-rtl.css',
                    'lms/static/css/lms-style-app-extend2-rtl.css',
                    'lms/static/css/lms-style-course-vendor.css',
                    'lms/static/css/lms-style-course.css',
                    'lms/static/css/lms-style-course-rtl.css',
                    'lms/static/css/lms-style-xmodule-annotations.css'
                ]
            },
            studio: {
                src: [
                    // Sass-generated files
                    'cms/static/sass/style-app.css',
                    'cms/static/sass/style-app-extend1.css',
                    'cms/static/sass/style-app-rtl.css',
                    'cms/static/sass/style-app-extend1-rtl.css',
                    'cms/static/sass/style-xmodule.css',
                    'cms/static/sass/style-xmodule-rtl.css',

                    // Concat-generated files
                    'cms/static/css/cms-style-vendor.css',
                    'cms/static/css/cms-style-vendor-tinymce-content.css',
                    'cms/static/css/cms-style-vendor-tinymce-skin.css',
                    'cms/static/css/cms-style-app.css',
                    'cms/static/css/cms-style-app-extend1.css',
                    'cms/static/css/cms-style-app-rtl.css',
                    'cms/static/css/cms-style-xmodule.css',
                    'cms/static/css/cms-style-xmodule-rtl.css',
                    'cms/static/css/cms-style-xmodule-annotations.css'
                ]
            }
        },

        sass: {
            lms: {
                options: {
                    includePaths: [
                        'bower_components',
                        'common/static',
                        'common/static/sass'
                    ]
                },
                files: {
                    'lms/static/sass/application-extend1-rtl.css': 'lms/static/sass/application-extend1-rtl.scss',
                    'lms/static/sass/application-extend1.css': 'lms/static/sass/application-extend1.scss',
                    'lms/static/sass/application-extend2-rtl.css': 'lms/static/sass/application-extend2-rtl.scss',
                    'lms/static/sass/application-extend2.css': 'lms/static/sass/application-extend2.scss',
                    'lms/static/sass/application.css': 'lms/static/sass/application.scss',
                    'lms/static/sass/course-rtl.css': 'lms/static/sass/course-rtl.scss',
                    'lms/static/sass/course.css': 'lms/static/sass/course.scss',
                    'lms/static/sass/ie.css': 'lms/static/sass/ie.scss',
                }
            },
            studio: {
                options: {
                    includePaths: [
                        'bower_components',
                        'common/static',
                        'common/static/sass'
                    ]
                },
                files: {
                    'cms/static/sass/style-app.css': 'cms/static/sass/style-app.scss',
                    'cms/static/sass/style-app-extend1.css': 'cms/static/sass/style-app-extend1.scss',
                    'cms/static/sass/style-app-rtl.css': 'cms/static/sass/style-app-rtl.scss',
                    'cms/static/sass/style-app-extend1-rtl.css': 'cms/static/sass/style-app-extend1-rtl.scss',
                    'cms/static/sass/style-xmodule.css': 'cms/static/sass/style-xmodule.scss',
                    'cms/static/sass/style-xmodule-rtl.css': 'cms/static/sass/style-xmodule-rtl.scss'
                }
            }
        },

        concat: {
            lms: {
                files: {
                    'lms/static/css/lms-style-vendor.css': [
                        'lms/static/css/vendor/font-awesome.css',
                        'lms/static/css/vendor/jquery.qtip.min.css',
                        'lms/static/css/vendor/responsive-carousel/responsive-carousel.css',
                        'lms/static/css/vendor/responsive-carousel/responsive-carousel.slide.css'
                    ],
                    'lms/static/css/lms-style-vendor-tinymce-content.css': [
                        'lms/static/js/vendor/tinymce/js/tinymce/skins/studio-tmce4/content.min.css'
                    ],
                    'lms/static/css/lms-style-vendor-tinymce-skin.css': [
                        'lms/static/js/vendor/tinymce/js/tinymce/skins/studio-tmce4/skin.min.css'
                    ],
                    'lms/static/css/lms-style-app.css': [
                        'lms/static/sass/application.css',
                        'lms/static/sass/ie.css'
                    ],
                    'lms/static/css/lms-style-app-extend1.css': [
                        'lms/static/sass/application-extend1.css'
                    ],
                    'lms/static/css/lms-style-app-extend2.css': [
                        'lms/static/sass/application-extend2.css'
                    ],
                    'lms/static/css/lms-style-app-rtl.css': [
                        'lms/static/sass/application-rtl.css',
                        'lms/static/sass/ie-rtl.css'
                    ],
                    'lms/static/css/lms-style-app-extend1-rtl.css': [
                        'lms/static/sass/application-extend1-rtl.css'
                    ],
                    'lms/static/css/lms-style-app-extend2-rtl.css': [
                        'lms/static/sass/application-extend2-rtl.css'
                    ],
                    'lms/static/css/lms-style-course-vendor.css': [
                        'lms/static/js/vendor/CodeMirror/codemirror.css',
                        'lms/static/css/vendor/jquery.treeview.css',
                        'lms/static/css/vendor/ui-lightness/jquery-ui-1.8.22.custom.css'
                    ],
                    'lms/static/css/lms-style-course.css': [
                        'lms/static/sass/course.css',
                        'lms/static/xmodule/modules.css'
                    ],
                    'lms/static/css/lms-style-course-rtl.css': [
                        'lms/static/sass/course-rtl.css',
                        'lms/static/xmodule/modules.css'
                    ],
                    'lms/static/css/lms-style-xmodule-annotations.css': [
                        'lms/static/css/vendor/ova/annotator.css',
                        'lms/static/css/vendor/ova/edx-annotator.css',
                        'lms/static/css/vendor/ova/video-js.min.css',
                        'lms/static/css/vendor/ova/rangeslider.css',
                        'lms/static/css/vendor/ova/share-annotator.css',
                        'lms/static/css/vendor/ova/richText-annotator.css',
                        'lms/static/css/vendor/ova/tags-annotator.css',
                        'lms/static/css/vendor/ova/flagging-annotator.css',
                        'lms/static/css/vendor/ova/diacritic-annotator.css',
                        'lms/static/css/vendor/ova/grouping-annotator.css',
                        'lms/static/css/vendor/ova/ova.css',
                        'lms/static/js/vendor/ova/catch/css/main.css'
                    ]
                }
            },
            studio: {
                files: {
                    'cms/static/css/cms-style-vendor.css': [
                        'common/static/css/vendor/normalize.css',
                        'common/static/css/vendor/font-awesome.css',
                        'common/static/css/vendor/html5-input-polyfills/number-polyfill.css',
                        'common/static/js/vendor/CodeMirror/codemirror.css',
                        'common/static/css/vendor/ui-lightness/jquery-ui-1.8.22.custom.css',
                        'common/static/css/vendor/jquery.qtip.min.css',
                        'common/static/js/vendor/markitup/skins/simple/style.css',
                        'common/static/js/vendor/markitup/sets/wiki/style.css',
                    ],
                    'cms/static/css/cms-style-vendor-tinymce-content.css': [
                        'common/static/css/tinymce-studio-content-fonts.css',
                        'common/static/js/vendor/tinymce/js/tinymce/skins/studio-tmce4/content.min.css',
                        'common/static/css/tinymce-studio-content.css'
                    ],
                    'cms/static/css/cms-style-vendor-tinymce-skin.css': [
                        'common/static/js/vendor/tinymce/js/tinymce/skins/studio-tmce4/skin.min.css'
                    ],
                    'cms/static/css/cms-style-app.css': [
                        'cms/static/sass/style-app.css'
                    ],
                    'cms/static/css/cms-style-app-extend1.css': [
                        'cms/static/sass/style-app-extend1.css'
                    ],
                    'cms/static/css/cms-style-app-rtl.css': [
                        'cms/static/sass/style-app-rtl.css'
                    ],
                    'cms/static/css/cms-style-xmodule.css': [
                        'cms/static/sass/style-xmodule.css'
                    ],
                    'cms/static/css/cms-style-xmodule-rtl.css': [
                        'cms/static/sass/style-xmodule-rtl.css'
                    ],
                    'cms/static/css/cms-style-xmodule-annotations.css': [
                        'common/static/css/vendor/ova/annotator.css',
                        'common/static/css/vendor/ova/edx-annotator.css',
                        'common/static/css/vendor/ova/video-js.min.css',
                        'common/static/css/vendor/ova/rangeslider.css',
                        'common/static/css/vendor/ova/share-annotator.css',
                        'common/static/css/vendor/ova/richText-annotator.css',
                        'common/static/css/vendor/ova/tags-annotator.css',
                        'common/static/css/vendor/ova/flagging-annotator.css',
                        'common/static/css/vendor/ova/diacritic-annotator.css',
                        'common/static/css/vendor/ova/grouping-annotator.css',
                        'common/static/css/vendor/ova/ova.css',
                        'common/static/js/vendor/ova/catch/css/main.css'
                    ]
                }
            }
        }
    });

    grunt.registerTask('lms', [
        'clean:lms',
        'sass:lms',
        'concat:lms',
        'watch:lms_sass'
    ]);

    grunt.registerTask('studio', [
        'clean:studio',
        'sass:studio',
        'concat:studio'
    ]);
};