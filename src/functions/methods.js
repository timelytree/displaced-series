import moment from 'moment'
import axios from 'axios'

export default {
  // -------------------------------------------------------- Utility functions
  // --------------------------------------------------------------------------
  E: (id) => { return document.getElementById(id) },
  cE: (className) => { return document.getElementsByClassName(className) },
  addC: (item, className) => { item.classList.add(className) },
  remC: (item, className) => { item.classList.remove(className) },
  gA: (item, att) => { return item.getAttribute('data-' + att + '') },
  // ------------------------------------------- Use Moment.js to formate dates
  // --------------------------------------------------------------------------
  formatDate: moment,
  // --------------------------------------------------------------- Fetch page
  // --------------------------------------------------------------------------
  fetchSinglePage: function (cb, pageId) {
    axios
      .get('https://displaced.000webhostapp.com/wp-json/wp/v2/pages/' + pageId + '')
      .then(response => { cb(response.data) })
  },
  // ---------------------------------------------------- Fetch home page posts
  // --------------------------------------------------------------------------
  fetchAllPosts: function (cb) {
    axios
      .get('https://displaced.000webhostapp.com/wp-json/wp/v2/posts')
      .then(response => { cb(response.data) })
  },
  // -------------------------------------------------------- Fetch single post
  // --------------------------------------------------------------------------
  fetchSinglePost: function (cb, postId) {
    axios
      .get('https://displaced.000webhostapp.com/wp-json/wp/v2/posts/' + postId + '')
      .then(response => { cb(response.data) })
  },
  // ------------------------------------------------------- Fetch recent posts
  // --------------------------------------------------------------------------
  fetchRecentPosts: function (cb) {
    axios
      .get('https://displaced.000webhostapp.com/wp-json/wp/v2/posts?per_page=3')
      .then(response => { cb(response.data) })
  },
  // -------------------------------------- Fetch gif for menu background image
  // --------------------------------------------------------------------------
  fetchMenuOverlayBackgroundImg: function (cb) {
    axios
      .get('https://displaced.000webhostapp.com/wp-json/wp/v2/media/75')
      .then(response => { cb(response.data) })
  }
}
