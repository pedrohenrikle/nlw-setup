const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-06", "01-07", "01-09"],
  water: ["01-02", "01-06", "01-07", "01-09", "01-10"],
  food: ["01-01", "01-02", "01-07", , "01-10"],
  sleep: ["01-01", "01-02", "01-06", "01-09", "01-10"],
  studie: ["01-01", "01-06", "01-07", "01-09"],
  training: ["01-01", "01-02", "01-07", "01-09", "01-10"],
}

nlwSetup.setData(data)
nlwSetup.load()
