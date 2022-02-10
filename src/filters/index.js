import Vue from 'vue';
import { formatCardExpiryDate, hideCardNumber } from "./cardTextFilters";

Vue.filter('hideCardNumber', hideCardNumber);
Vue.filter('formatCardExpiryDate', formatCardExpiryDate);