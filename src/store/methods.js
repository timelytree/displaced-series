import moment from 'moment'
import axios from 'axios'
import Store from '../store/Store.js'

export default {
  // -------------------------------------------------------- Utility functions
  // --------------------------------------------------------------------------
  E: (id) => { return document.getElementById(id) },
  cE: (className) => { return document.getElementsByClassName(className) },
  addC: (item, className) => { item.classList.add(className) },
  remC: (item, className) => { item.classList.remove(className) },
  gA: (item, att) => { return item.getAttribute('data-' + att + '') },
  // -------------------------------------------- Use Moment.js to format dates
  // --------------------------------------------------------------------------
  formatDate: moment,
  // --------------------------------------------------------------- Fetch page
  // --------------------------------------------------------------------------
  fetchSinglePage: function (cb, pageId) {
    axios
      .get('http://67.207.85.161/displaced/wp-json/wp/v2/pages/' + pageId + '')
      .then(response => { cb(response.data) })
  },
  // ---------------------------------------------------- Fetch home page posts
  // --------------------------------------------------------------------------
  fetchAllPosts: function (cb) {
    axios
      .get('http://67.207.85.161/displaced/wp-json/wp/v2/posts')
      .then(response => { cb(response.data) })
  },
  // -------------------------------------------------------- Fetch single post
  // --------------------------------------------------------------------------
  fetchSinglePost: function (cb, postId) {
    axios
      .get('http://67.207.85.161/displaced/wp-json/wp/v2/posts/' + postId + '')
      .then(response => { cb(response.data) })
  },
  // ------------------------------------------------------- Fetch recent posts
  // --------------------------------------------------------------------------
  fetchRecentPosts: function (cb) {
    axios
      .get('http://67.207.85.161/displaced/wp-json/wp/v2/posts?per_page=3')
      .then(response => { cb(response.data) })
  },
  // -------------------------------------- Fetch gif for menu background image
  // --------------------------------------------------------------------------
  fetchMenuOverlayBackgroundImg: function (cb) {
    axios
      .get('http://67.207.85.161/displaced/wp-json/wp/v2/media/75')
      .then(response => { cb(response.data) })
  },
  // ---------------------------------------------------------- Menu Open/Close
  // --------------------------------------------------------------------------
  showMenu: function (cb, status) {
    Store.showNavMenu = !Store.showNavMenu
    this.menuOpen = Store.showNavMenu
    if (status !== undefined) {
      Store.showNavMenu = false
      this.$children[0].menuOpen = Store.showNavMenu
    }
  }
}
