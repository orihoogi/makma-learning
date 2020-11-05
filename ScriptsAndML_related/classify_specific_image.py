from imageai.Prediction.Custom import ModelTraining
import os, sys
from imageai.Prediction.Custom import CustomImagePrediction
det main():
    execution_path = os.getcwd()
    prediction = CustomImagePrediction()
    print("wowowow")
    # prediction.setModelPath(modelPath)
    prediction.setModelPath(model_path="../idenprof_resnet.h5"))
    # prediction.setJsonPath(jsonPath)
    prediction.setJsonPath(model_json="../idenprof.json"))
    prediction.setModelTypeAsResNet()
    prediction.loadModel(num_objects=10)
    predictions, probabilities = prediction.predictImage("./images/${req.user.username}/test.jpg`", result_count=3)

    # res = None

    for eachPrediction, eachProbability in zip(predictions, probabilities):
        # res = res, eachPrediction, " : ", eachProbability
        print(eachPrediction, " : ", eachProbability)
if __name__ == "__main__":
    main(sys.argv[1])
