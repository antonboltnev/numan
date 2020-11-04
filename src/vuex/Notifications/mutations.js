export function ADD_ITEM_NOTIFICATION(state, payload = {}) {
  let { type, message, permanent } = payload;
  if (!type || !message) return;

  if (type !== "custom") {
    state[type].push({
      id: state[type].length + 1,
      type: String(type),
      message,
      permanent: permanent === true
    });

    return;
  }

  state.custom.push({
    id: state.custom.length + 1,
    message,
    type: String(type),
    permanent: permanent === true
  });
}

export function DELETE_ITEM_NOTIFICATION(state, { type, id } = {}) {
  if (!type || !id) return;

  if (type !== "custom") {
    state[type] = state[type].filter(item => item.id !== id);
    return;
  }

  state["custom"] = state["custom"].filter(item => {
    if (item.type !== type) return true;
    return item.id !== id;
  });
}

export default {
  ADD_ITEM_NOTIFICATION,
  DELETE_ITEM_NOTIFICATION,
};
