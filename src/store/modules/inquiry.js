import { getPatientInfo, exitAccount, getFirstRecord, getdrugadd, getMyOrders, getOrdersInfo, getDoctorsadvice, endInquiry, getIntegralInfo, getQuery } from '@/api/inquiry'

const actions = {
  exitAccount({ commit }, data) {
    debugger
    return new Promise((resolve, reject) => {
      exitAccount({ clientId: data }).then(response => {
        debugger
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  endInquiry({ commit }, result) {
    debugger
    const { inquiryId } = result
    return new Promise((resolve, reject) => {
      endInquiry({ inquiryId: inquiryId }).then(response => {
        debugger
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  getDoctorsadvice({ commit }, inquiryId) {
    debugger
    return new Promise((resolve, reject) => {
      getDoctorsadvice(inquiryId).then(response => {
        debugger
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  getdrugadd({ commit }, requestInfo) {
    debugger
    const { keyword, page, userType } = requestInfo
    return new Promise((resolve, reject) => {
      getdrugadd(keyword, page, userType).then(response => {
        debugger
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  getFirstRecord({ commit }, inquiryId) {
    return new Promise((resolve, reject) => {
      getFirstRecord(inquiryId).then(response => {
        debugger
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  getQuery({ commit }, requestInfo) {
    debugger
    const { patId, docId } = requestInfo
    return new Promise((resolve, reject) => {
      getQuery(patId, docId).then(response => {
        debugger
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get patient info
  getPatientInfo({ commit }, inquiryId) {
    return new Promise((resolve, reject) => {
      getPatientInfo(inquiryId).then(response => {
        debugger
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  getIntegralInfo({ commit }, docId) {
    return new Promise((resolve, reject) => {
      getIntegralInfo(docId).then(response => {
        debugger
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  getMyOrders({ commit }, docId) {
    return new Promise((resolve, reject) => {
      getMyOrders(docId).then(response => {
        debugger
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  getOrdersInfo({ commit }, inquiryId) {
    debugger
    return new Promise((resolve, reject) => {
      getOrdersInfo(inquiryId).then(response => {
        debugger
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  actions
}

