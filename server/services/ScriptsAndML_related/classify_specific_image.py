from imageai.Prediction.Custom import ModelTraining
import os, sys
from imageai.Prediction.Custom import CustomImagePrediction

def main(imgPath, username):
    cwd = os.getcwd()
    model_trainer = ModelTraining()
    model_trainer.setModelTypeAsResNet()
    model_trainer.setDataDirectory(os.path.join(cwd, "services/images/{username}"))
    model_trainer.trainModel(num_objects=2, num_experiments=1, enhance_data=True, batch_size=3, show_network_summary=True)


    prediction = CustomImagePrediction()
    prediction.setModelPath(model_path=os.path.join(cwd, "services/images/{username}/models/model_ex-001_acc-0.500000.h5"))
    prediction.setJsonPath(model_json=os.path.join(cwd, "services/images/{username}/json/model_class.json"))
    prediction.setModelTypeAsResNet()
    prediction.loadModel(num_objects=2)
    predictions, probabilities = prediction.predictImage(imgPath, result_count=2)


    for eachPrediction, eachProbability in zip(predictions, probabilities):
        # res = res, eachPrediction, " : ", eachProbability
        print(eachPrediction, " : ", eachProbability)
        
if __name__ == "__main__":
    imgPath = sys.argv[1]
    username = sys.argv[2]
    main(username, imgPath)
