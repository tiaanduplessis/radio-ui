const isObj = val => val && typeof val === 'object'

function getType (val) {
  return Array.isArray(val) ? 'array' : typeof val
}

function getLength (val) {
  return getType(val) === 'array' ? val.length : Object.keys(val).length
}

function typeArrayOrObject (type) {
  return ['array', 'object'].includes(type)
}

function isEqual (value, other) {
  const type = getType(value)
  if (type !== getType(other)) return false

  if (!typeArrayOrObject(type)) {
    return value === other
  }

  const valueLen = getLength(value)
  const otherLen = getLength(other)
  if (valueLen !== otherLen) return false

  if (type === 'array') {
    for (var i = 0; i < valueLen; i++) {
      if (!isEqual(value[i], other[i])) return false
    }
  } else {
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        if (!isEqual(value[key], other[key])) return false
      }
    }
  }
  return true
}

export default function (base = {}, other = {}) {
  if (!isObj(base) || !isObj(other)) {
    throw new Error('Arguments are not objects')
  }

  const diff = {}

  for (let key in base) {
    if (!isEqual(base[key], other[key])) {
      diff[key] = base[key]
    }
  }

  return diff
}
