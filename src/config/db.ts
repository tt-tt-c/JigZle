import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'JigZle.db',
    location: 'default',
    createFromLocation: '~www/JigZle.db',
  },
  () => {},
  error => {
    console.log(error);
  },
);

export type BasicStage = {
  id: number;
  stage_no: number;
  is_cleared: number;
  is_shown_hint: number;
  answer: string;
  hint: string;
  commentary: string;
  mistery_image: string;
  pieceId: number;
  created_at: string;
  updated_at: string;
};

export const getBasicStages = async () => {
  let basicStages: Array<BasicStage> = [];
  basicStages = await new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM basic_stage_table;',
        [],
        (txe, results) => {
          const {rows} = results;
          let ret: Array<BasicStage> = [];

          for (let i = 0; i < rows.length; i++) {
            ret.push({
              ...rows.item(i),
            });
          }
          resolve(ret);
        },
        error => {
          reject(error);
        },
      );
    });
  });

  return basicStages;
};

export const getBasicStage = (stage_no: string) => {
  db.transaction(txn => {
    txn.executeSql(
      `SELECT * FROM basic_stage_table where stage_no = ${stage_no} limit 1;`,
      [],
      (tx, results) => {
        const rows = results.rows;
        let basicStages: Array<BasicStage> = [];

        for (let i = 0; i < rows.length; i++) {
          basicStages.push({
            ...rows.item(i),
          });
        }
        return basicStages;
      },
      error => {
        console.log(error);
      },
    );
  });
};
