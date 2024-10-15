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
  [] JobListing
    [v] props
    [v] truncated description (vue component)
      [v] display full description on toggle
  [] JobListings
    [v] load jobs into array from fetch call
    [v] display Job Listing using map function
    [v] ViewAllJobs button prop and condiditional display
  [] BackButton
[v] setup pages
  [] jobs page
    [] skeleton
    [] styling
  [v] add jobs page
    [v] skeleton
    [v] styling
  [v] dynamic job page
    [v] skeleton
    [v] styling
    [v] fetch data from API and display
  [] edit job page
    [] skeleton
    [] styling

[] setup API routes to get data
  [] GET request handler for Dynamic Job ID
    [v] fetch data from external API or Astro collections?
    [v] serve data to GET request 
  [] setup request handlers
  [] 

[] install and configure:
  [v] json-server
  [] toastification
  [] prime icons