from imageai.Prediction.Custom import ModelTraining
import os, sys
from imageai.Prediction.Custom import CustomImagePrediction

def main(imgPath):
    cwd = os.getcwd()
    prediction = CustomImagePrediction()
    print("wowowow")
    # prediction.setModelPath(modelPath)
    prediction.setModelPath(model_path=os.path.join(cwd, "services/ScriptsAndML_related/idenprof_resnet.h5"))
    # prediction.setJsonPath(jsonPath)
    prediction.setJsonPath(model_json=os.path.join(cwd, "services/ScriptsAndML_related/idenprof.json"))
    prediction.setModelTypeAsResNet()
    prediction.loadModel(num_objects=10)
    # predictions, probabilities = prediction.predictImage(os.path.join(cwd, "images/omri/test.jpg"), result_count=3)
    predictions, probabilities = prediction.predictImage(imgPath, result_count=3)

    # res = None

    for eachPrediction, eachProbability in zip(predictions, probabilities):
        # res = res, eachPrediction, " : ", eachProbability
        print(eachPrediction, " : ", eachProbability)
        
if __name__ == "__main__":
    print(sys.argv)
    main(sys.argv[1])
