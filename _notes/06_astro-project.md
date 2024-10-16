# Astro Version of the Job Listings App
- uses vue for dynamic functionality
- made to check differences with Nuxt
- uses SSR functionality of Astro

# Todo:
[v] install Astro, setup new project
[v] install and configure Tailwind
[v] setup default layout
  [] styling

[]  components:
  [v] Navbar
    [] links
    [v] active link background color
    [v] prevent background on logo if it's active link
  [v] Hero
  [v] HomeCards
    [v] Card
  [v] JobListing
    [v] props
    [v] truncated description (vue component)
      [v] display full description on toggle
  [v] JobListings
    [v] load jobs into array from fetch call
    [v] display Job Listing using map function
    [v] ViewAllJobs button prop and condiditional display
  [] BackButton
    [] icon

  [] Add Job Form (vue component)
    [v] content and styling
    [v] submit post request
    [v] redirect to newly created job page when successfull
  [v] Edit Job Form (vue component)
    [v] content and styling
    [v] populate form with original job data
    [v] submit put request
      [v] test
    [v] redirect to newly updated job page when successfull

[v] setup pages
  [v] jobs page
    [v] skeleton
    [v] styling
  [v] add jobs page
    [v] skeleton
    [v] styling
  [v] dynamic job page
    [v] skeleton
    [v] styling
    [v] fetch data from API and display
  [v] edit job page
    [v] skeleton
    [v] styling
    [v] delete button (js script)
      [v] submit delete request
      [v] reroute to page
      [v] test functionality

[] setup API routes to get data
  [] GET request handler for Dynamic Job ID
    [v] fetch data from external API or Astro collections?
    [v] serve data to GET request 
  [v] POST request hander
  [v] PUT request handler (dynamic page id)
    [v] connect to external api
    [] test
  [v] DELETE request handler (dynamic page id)
    [v] connect to external api
    [v] test

[] install and configure:
  [v] json-server
  [] toastification
  [v] prime icons
    ! Unable to load this using astro.config so I loaded into the layout instead