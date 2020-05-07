---
layout: default
title:  "Welcome to Jekyll!"
date: 2020-04-21 23:39 +0200
image_url: /assets/img/jekyll-logo.png
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

background: linear-gradient(110deg, #3a47d5 0%, #75ace8 50%, #00d2ff 100%);

    background: rgb(230,230,250);
    background: linear-gradient(180deg, rgba(230,230,250,1) 20%, rgba(255,255,255,1) 50%, rgba(230,230,250,1) 80%);

          <div class="what-is-container">
            <div class="what-is-image">
              <img src="/assets/img/what-is.webp">
            </div>
            <div class="what-is-text">
              <p>When dealing with personal issues such as anxiety and depression or coping with grief, sometimes it can be difficult to make sense of what is happening in your mind and body, especially if you don’t have any other experience to compare it to. Bibliotherapy aims to bridge this gap by using literature to help you improve your life by providing information, support, and guidance in the form of reading activities via books and stories.</p>
            </div>
          </div>


   header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        border-bottom: solid 2px rgba(149, 195, 233, 0.3);
    }

        .burger-icon {
            display: none;
        }


        .sensible-header {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            background: white;
            letter-spacing: 0;


            .main-navigation {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .menu-link {
                color: black;
                opacity: 0.45;
            }
        }

        .main-logo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px 0 5px;

            img {
                height: 96px;
                width: 96px;
                margin: auto 20px;
                border-radius: 50%;

                &:hover, &:focus {
                    opacity: 0.75;
                }
            }
        }

        .search-bar {
            max-width: 50%;
            position: relative;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;

            .input-wrapper {
                position: relative;
                margin: auto;

                .search-icon {
                    position: absolute;
                    top: 0.25rem;
                    left: 0.75rem;

                    &:before {
                        content: url(/assets/icons/search.svg);
                    }
                }

                input#search-input {
                    margin: auto;
                    max-width: 100%;
                    line-height: 1.5rem;
                    border: none;
                    border-radius: 8px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    padding-left: 3rem;
                    padding-right: 2rem;
                    background-color: rgba(0, 0, 0, .26);
                    font-size: 1rem;
                    transition: background-color .25s cubic-bezier(.1, .7, .1, 1);
                    color: 	#FFFFFF;

                    &:hover, &:focus {
                        background-color: hsla(0, 0%, 100%, .12);
                        color: white;
                        outline: none;
                    }
                }

                input#search-input::-webkit-input-placeholder {
                    color: hsla(0, 0%, 100%, .5);
                }
                input#search-input::-moz-placeholder {
                    color: hsla(0, 0%, 100%, .5);
                }
                input#search-input:-ms-input-placeholder {
                    color: hsla(0, 0%, 100%, .5);
                }
                input#search-input:-moz-placeholder {
                    color: hsla(0, 0%, 100%, .5);
                }

                input#search-input:not(:focus) + .search-clear {
                    opacity: 0;
                }

                .search-clear {
                    display: block;
                    position: absolute;
                    line-height: 1.5;
                    top: -0.7rem;
                    left: 13.5rem;
                    border: none;
                    padding: 1rem;
                    background-color: transparent;
                    cursor: pointer;

                    &:before {
                        content: url(/assets/icons/close-small.svg);
                    }

                    &:not(:focus) {
                        opacity: 0.5;
                    }

                    &:hover {
                        opacity: 1;
                        outline: none;
                    }

                    &:focus {
                        opacity: 0.5;
                        outline: none;
                    }
                }
            }
        }

        .main-menu {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .main-navigation {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
            list-style-type: none;
        }

            .menu-item {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                height: 100%;

            }
            .menu-item a {
                width: 100%;
                height: 100%;
                text-decoration: none;
                line-height: 3;
                padding: 0 20px 0 20px;
                color: white;
                font-weight: bold;

                &:hover, &:focus {
                    background-color: $main-color-light;
                    cursor: pointer;
                }
            }

            .active {
                background-color: $main-color-light;
            }

            .right-side-navigation {
                display: flex;
                align-items: center;
                margin: 0;
                padding-right: 20px;
                list-style-type: none;
            }

            .social-logo {
                border: none;
                background: transparent;
                margin: 5px 10px;
                opacity: 0.5;

                &:hover {
                    cursor: pointer;
                    opacity: 1;
                }
            }