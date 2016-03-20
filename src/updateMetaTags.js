import React from 'react'
import documentUndefined from './documentUndefined'
import removeElementsByClass from './removeElementsByClass'

deafult export function updateMetaTags (title, descrition) {

  if( documentUndefined() ){
  } else {

    let head = document.getElementsByTagName('head')[0]

    /* remove the old routes meta tags */
    removeElementsByClass('meta')
    
    /* title */
    document.title = title

    /* description */
    var meta = document.createElement('meta')
    meta.name = 'descrition'
    meta.content = descrition
    meta.className = 'meta'
    head.appendChild(meta)

  }
}
