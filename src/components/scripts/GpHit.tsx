'use client'

import axios from 'axios'
import { v4 as uuidV4 } from 'uuid'
import { useCookies } from 'next-client-cookies'

import React, { useEffect, useState } from 'react'

interface IGpHit {
  postId?: string
  article?: string
  referrer?: string
  gpTrackId: string
  category?: string
  siteName: string
  datePublished?: string
  thumbsUrl?: string
}

export default function GpHitFunc(props: IGpHit) {
  let cookies = useCookies()
  let [ticketId, setTicketId] = useState('')
  let [sessionId, setSessionId] = useState('')
  let [sended, setSended] = useState(false)

  async function sendRequest(
    isAfter10: boolean,
    ticketIdRecover?: string,
    sessionIdRecover?: string
  ) {
    await axios.post('https://events-api.gazetadopovo.com.br/register/', {
      article: props.article ?? '',
      city: '',
      contentId: props.postId ?? '',
      country: '',
      hasClub: false,
      jwt: '',
      latitude: '',
      longitude: '',
      referrer: props.referrer ?? cookies.get('referrer') ?? '',
      region: '',
      resolution: '',
      sdk: props.gpTrackId,
      section: props.category ?? '',
      site: props.siteName,
      statsCategories: [],
      statsPushedAt: props.datePublished ?? '',
      statsStartDecayAfterDays: '',
      statsWeight: 1,
      subscriptionId: '',
      thumbUrl: props.thumbsUrl ?? '',
      ticketId: ticketId ?? ticketIdRecover,
      sessionId: sessionId ?? sessionIdRecover,
      parentId: '',
      timezone: -3,
      title: document.title,
      url: window.location.href,
      urlPage: window.location.href,
      userId: '',
      verbs: [],
      userAgent: navigator.userAgent,
      eventType: !isAfter10 ? 'hit' : 'read',
    })
  }

  function verifyCookies() {
    let ticketCookieTemp = cookies.get('TKTID')

    let sessionCookieTemp = cookies.get('SID')

    if (!ticketCookieTemp) {
      let uidTemp = uuidV4()
      cookies.set('TKTID', uidTemp, {
        expires: 60 * 60 * 24 * 30 * 12,
      })
      ticketCookieTemp = uidTemp
    }

    if (!sessionCookieTemp) {
      let uidTemp = uuidV4()
      cookies.set('SID', uidTemp)
      sessionCookieTemp = uidTemp
    }

    setTicketId(ticketCookieTemp)
    setSessionId(sessionCookieTemp)

    return {
      ticketId: ticketCookieTemp,
      sessionId: sessionCookieTemp,
    }
  }

  useEffect(() => {
    if (!sended) {
      let tokens = verifyCookies()
      sendRequest(false, tokens.ticketId, tokens.sessionId)

      setTimeout(
        () => sendRequest(true, tokens.ticketId, tokens.sessionId),
        10000
      )

      setSended(true)
    }
  })

  return <></>
}
