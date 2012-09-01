DiscussionApp =
  start: (elem)->
    # TODO: Perhaps eliminate usage of global variables when possible
    element = $(elem)
    window.$$contents = {}
    window.$$course_id = element.data("course-id")
    user_info = element.data("user-info")
    threads = element.data("threads")
    window.user = new DiscussionUser(user_info)
    discussion = new Discussion(threads)
    new DiscussionRouter({discussion: discussion})
    Backbone.history.start({pushState: true, root: "/courses/#{$$course_id}/discussion/forum/"})

$ ->
  $("section.discussion").each (index, elem) ->
    DiscussionApp.start(elem)
