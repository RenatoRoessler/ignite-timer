import { formatDistanceToNow } from "date-fns/esm";
import { ptBR } from "date-fns/locale";
import React, { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { HistoryContainer, HitoryList, Status } from "./styles";

export const History = () => {
  const { cycles } = useContext(CyclesContext);
  return (
    <HistoryContainer>
      <h1>Meus histórico</h1>
      <HitoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date( cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {/* <Status statusColor="green">Concluid</Status> */}
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycle.interruptDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.interruptDate && !cycle.finishedDate && (
                      <Status statusColor="yellow">Em Andamento</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HitoryList>
    </HistoryContainer>
  );
};
