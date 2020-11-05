from imageai.Prediction.Custom import ModelTraining
# import os
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
# model_trainer = ModelTraining()
# model_trainer.setModelTypeAsResNet()
# model_trainer.setDataDirectory("idenprof")
# model_trainer.trainModel(num_objects=10, num_experiments=1, enhance_data=False, batch_size=32, show_network_summary=True)
import os, sys
print("hi first")
from imageai.Prediction.Custom import CustomImagePrediction
print("hi second")
execution_path = os.getcwd()

# modelPath = os.path.join(execution_path, "idenprof\\models\\idenprof_resnet.h5")
# jsonPath = os.path.join(execution_path, "idenprof\\jsonidenprof_model_class.json")
print(execution_path)

prediction = CustomImagePrediction()
print("wowowow")
# prediction.setModelPath(modelPath)
prediction.setModelPath(model_path=os.path.join("C:\\Users\\user-pc\\PycharmProjects\\blabla\\", "idenprof_resnet.h5"))
# prediction.setJsonPath(jsonPath)
prediction.setJsonPath(model_json=os.path.join("C:\\Users\\user-pc\\PycharmProjects\\blabla\\", "idenprof.json"))
prediction.setModelTypeAsResNet()
prediction.loadModel(num_objects=10)

predictions, probabilities = prediction.predictImage("C:\\Users\\user-pc\\PycharmProjects\\blabla\\image.jpeg", result_count=3)

# res = None

for eachPrediction, eachProbability in zip(predictions, probabilities):
    # res = res, eachPrediction, " : ", eachProbability
    print(eachPrediction, " : ", eachProbability)

# f = open("C:\\Users\\user-pc\\PycharmProjects\\blabla\\new.txt", "w")
# f.write(res)
# f.close()

# sys.stdout.flush()
